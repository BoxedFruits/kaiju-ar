import React from "react";
import ImageTileList from "./imageTileList";
declare let window: any;

const kaijuAddress = '0x0c2E57EFddbA8c768147D1fdF9176a0A6EBd5d83'; // Currently crypto_dinosaur
//0x0c2E57EFddbA8c768147D1fdF9176a0A6EBd5d83 Kaiju address
//0xcc14dd8e6673fee203366115d3f9240b079a4930 testing address
//0x0a2c2cead92586a4ba3f6fa9c61a2b9ce2529b6d kaiju team wallet
//0x5fce1aa0989e0e679d795566b2b5ec11c27bbf73 spinny bois
const options = { method: 'GET' };
interface State {
    address: string;
    images: any[];
};

// Connect wallet and fetch images
class ConnectAndFetchImages extends React.Component<{}, State>{
    public images = '';

    state: State = {
        address: '',
        images: []
    };

    public async connectWallet() {
        try {
            if (window.ethereum) {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                this.setState(() => ({
                    address: accounts[0]
                }));
                this.fetchImages();
            }
        } catch (e) {
            console.log(e);
        }
    }

    public useAddress() {
        const addressInput: HTMLInputElement = document.getElementById('eth_address') as HTMLInputElement;

        if (addressInput.value.length !== 42) { //Maybe do this feedback on the page
            alert("Please input a valid Ethreum Address");
            return;
        }

        this.fetchImages(addressInput.value)
    };

    public fetchImages(address?: string) {
        console.log(address)
        const userAddress = address ? address : this.state.address;
        fetch(`https://api.opensea.io/api/v1/assets?owner=${userAddress}&asset_contract_address=${kaijuAddress}&order_direction=desc&offset=0&limit=50`, options)
            .then(response => response.json())
            .then(response => {
                // console.log(response)
                this.setState(() => ({
                    images: response.assets
                }));
            })
            .catch(err => console.error(err));
    };

    render() {
        return (
            <div className="main-container">
                {this.state.address === '' && this.state.images.length === 0 ? <div>
                    <button className="my-button" onClick={this.connectWallet.bind(this)}>Connect</button>
                    <div className=" input-container">
                        <input id="eth_address" type="text" placeholder="Or enter your Eth address" />
                        <button className="my-button submit-button" onClick={this.useAddress.bind(this)}>SUBMIT</button>
                    </div>
                </div> :
                    <ImageTileList images={this.state.images}></ImageTileList>
                }
            </div>
        );
    }
}

export default ConnectAndFetchImages;