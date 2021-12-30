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
    handleClick = (elem) => { // Type this?
        const linkTob64 = btoa(encodeURIComponent(elem.target.src));
        window.location.href = `./viewAr.html?img=` + linkTob64;
    };

    render() {
        return (
            <div>
                {this.props.images.map((image: any) => {
                    console.log(image)
                    return (
                        <div>
                            <img src={image?.image_preview_url} onClick={this.handleClick.bind(this)}></img>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default ImageTileList;