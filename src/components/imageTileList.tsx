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
        // console.log(this.props)
        return (
            <div>
                {/* needs to be inserted above body? */}
                <div dangerouslySetInnerHTML={{
                    __html: `
                    <a-scene arjs="sourceType: webcam; debugUIEnabled: true;">
                    <a-anchor>
                      <a-box
                        position="0 0.5 0"
                        material="opacity: 0.5; side:double; color:red;"
                      >
                      </a-box>
                    </a-anchor>
                    <a-camera-static />
                  </a-scene>`
            }}
                ></div>

                {this.props.images.map((image: any) => {
                    // console.log(image)
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