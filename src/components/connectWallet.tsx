import React from "react";
import ImageTileList from "./imageTileList";
declare let window: any;

const kaijuAddress = '0xcc14dd8e6673fee203366115d3f9240b079a4930'; // Currently crypto_dinosaur
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

        if (addressInput.value.length != 42) { //Maybe do this feedback on the page
            alert("Please input a valid Ethreum Address");
            return;
        }

        this.fetchImages(addressInput.value)
    };

    public fetchImages(address?: string) {
        console.log(address)
        const userAddress = address ? address : this.state.address;
        fetch(`https://testnets-api.opensea.io/api/v1/assets?owner=${userAddress}&asset_contract_address=${kaijuAddress}&order_direction=desc&offset=0&limit=50`, options)
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
            <div>
                {this.state.address === '' && this.state.images.length === 0 ? <div>
                    <button onClick={this.connectWallet.bind(this)}>Connect</button>
                    <div>
                        <input id="eth_address" type="text" placeholder="Or enter your Eth address" />
                        <button onClick={this.useAddress.bind(this)}>Submit</button>
                    </div>
                </div> :
                    <ImageTileList images={this.state.images}></ImageTileList>
                }
            </div>
        );
    }
}

export default ConnectAndFetchImages;