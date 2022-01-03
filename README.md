Link: https://kaiju-ar.herokuapp.com

Small project using AR.js to view Kaiju Kingz in AR using marker based recognition. I was able to achieve that for the most part but because of the way that the library makes assumptions about the structure of the HTML, I had to make a hacky a solution in order to use it along side React. I wanted to include the airdropped Kaiju Turnables but since the OpenSea API does not yet support Polygon that will have to wait for the future or if I feel like making a workaround. 

Demo:



Requirements:
- Hiro Marker (https://upload.wikimedia.org/wikipedia/commons/4/48/Hiro_marker_ARjs.png). You are able to print it out or have this on another screen to scan.
- A phone or device that has webGL or webRTC

How to use:

1) Go to website
2) Use either your metamask browser to connect to the webapp or input your Ethereum wallet that holds Kaiju Kingz NFTs
3) Accept permissions to allow the website to use your camera
4) Refresh the page (This is a current workaround. Will try to improve this in the future)
5) Hold your camera up to the Hiro Marker


TODO:

- Refactor the insertion of the custom AR img to be more stable.
- ~~Styling~~
- ~~Change to have the img be kaiju~~
- ~~Add Kaiju turntable to viewable NFT (can't be done because of opensea api doesnt support polygon. can try to do a work around in the future?)~~
- ~~use custom marker (too much hassle to try and get this down. known to be a hard thing to do with this AR.js)~~
- ~~test ability to use metamask mobile?~~
