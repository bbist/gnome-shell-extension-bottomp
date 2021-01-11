
const panel = imports.ui.main.panel;
const layoutManager = imports.ui.main.layoutManager;
const panelBox = imports.ui.main.layoutManager.panelBox;


var [
    heightNotifyListener,
    monitorsChangedListener,
] = [null, null];

function moveToTop() {
    const m = layoutManager.primaryMonitor;
    const [x, y, w] = [m.x - 1, m.y, m.width + 1];
    panelBox.set_pivot_point(x, -y);
    panelBox.set_position(x, y);
    panelBox.set_size(w, -1);
}

function moveToBottom() {
    const m = layoutManager.primaryMonitor;
    const [x, y, w] = [m.x - 1, m.y + m.height - panelBox.height, m.width + 1];
    panelBox.set_pivot_point(x, -y);
    panelBox.set_position(x, y);
    panelBox.set_size(w, -1);
}


function init() { }

function enable() {
    heightNotifyListener = panelBox.connect("notify::height", moveToBottom);
    monitorsChangedListener = layoutManager.connect("monitors-changed", moveToBottom);
    moveToBottom();
    panel.actor.add_style_class_name("popup-menu");
}

function disable() {
    heightNotifyListener && panelBox.disconnect(heightNotifyListener);
    monitorsChangedListener && layoutManager.disconnect(monitorsChangedListener);
    moveToTop();
    panel.actor.remove_style_class_name("popup-menu");
}
