import React from 'react';

interface Props {
    images: string[];
}

class ImageTileList extends React.Component<Props, {}> {
    handleClick = (elem) => {
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