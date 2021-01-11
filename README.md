# BottomP

**`BottomP`** is a gnome-shell extension inspired by [BottomPanel](https://github.com/Thoma5/gnome-shell-extension-bottompanel). It is written to address some of the issues with *BottomPanel*. Specifically, *BottomPanel* did not work well with multi-monitor setups with different resolutions and the panel often appears out of place. **`BottomP`** addresses this issue and it works well with multi-monitor setups with different resolutions, scaling and monitor positioning.

## How to Install

#### Manual Way

Use following commands:
```shell script
# clone gnome-shell-extension-bottomp
git clone https://github.com/bbist/gnome-shell-extension-bottomp

# copy to local gnome-shell extensions directory
cp -r gnome-shell-extension-bottomp ~/.local/share/gnome-shell/extensions/bottomp@pro.bbist
```

You can activate (or deactivate) it using `gnome-tweak-tool`.

#### Using Chrome/Firefox GNOME Shell integration
Search for extention `BottomP` using the search bar located in the GNOME Shell integration's home page in your browser. Open and install `BottomP`.

## Notes
1. It is a fork of the BottomPanel GNOME Shell extension. Thanks to [Thoma5](https://github.com/Thoma5) and all the other contributors.
2. It has only been tested on `Pop-os 20.10` with gnome-shell version `3.38.2`.