import React from 'react';

declare global {
    namespace JSX {
      interface IntrinsicElements {
        'a-scene': React.DetailedHTMLProps<any, any>;
        'a-marker': React.DetailedHTMLProps<any, any>;
        'a-entity': React.DetailedHTMLProps<any, any>;
      }
    }
  }

interface Props {
    images: string[];
}

class ImageTileList extends React.Component<Props, {}> {


    render() {
        return (
            <div>
                <a-scene embedded arjs>
                    <a-marker preset="hiro">
                        <a-entity
                            position="0 0 0"
                            scale="0.05 0.05 0.05"
                            gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
                        ></a-entity>
                    </a-marker>
                    <a-entity camera></a-entity>
                </a-scene>
                {this.props.images.map((image: any) => {
                    return (
                        <div>
                            <img src={image?.image_preview_url}></img>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default ImageTileList;