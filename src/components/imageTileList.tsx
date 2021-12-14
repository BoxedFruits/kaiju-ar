import React from 'react';

interface Props {
    images: string[];
}

class ImageTileList extends React.Component<Props, {}> {


    render() {
        console.log(this.props.images)
        this.props.images.forEach((image: any) => {
            console.log(image)
        });
        return (
            <div>
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