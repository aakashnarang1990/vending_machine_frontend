import axios from 'axios'
import { elements } from '../views/base';

export class machine{
    constructor(){}

    async getMachineState() {
        try{
            const result = await axios('http://127.0.0.1:8000/machine/state');
            return result.data
        }catch (error){
            alert(String(error.response.data[Object.keys(error.response.data)]));
        }
    }
}



export class Products{
    constructor(){}

    async getProducts() {
        try{
            const result = await axios('http://127.0.0.1:8000/machine/products');
            this.productsList = result.data;
        }catch (error){
            alert(String(error.response.data[Object.keys(error.response.data)]));
        }
    }

    async dispenseProduct(productID) {
        try{
            const result = await axios.patch('http://127.0.0.1:8000/machine/user_dispense_product', 
            {product: productID});
            this.result = result.data;
            return result.data
        }catch (error){
            alert(String(error.response.data[Object.keys(error.response.data)]))
        }
    }

    async addProduct(productID, quantity) {
        try{
            const result = await axios.patch('http://127.0.0.1:8000/machine/admin_add_product', 
            {product: productID, quantity:quantity});
            this.result = result.data;
            elements.stateLabel.innerHTML = result.data.state;
            elements.messageLabel.innerHTML = result.data.message;
            return result.data
        }catch (error){
            alert(String(error.response.data[Object.keys(error.response.data)]))
        }
    }
}


export class currencyContoller {
    constructor(){}

    async addCurrency(currency) {
        try{
            const result = await axios.patch('http://127.0.0.1:8000/machine/user_insert_currency', 
            {denomination: currency});
            return result.data            
        }catch (error){
            alert(String(error.response.data[Object.keys(error.response.data)]))
        }
    }

    async withdrawCurrency(amount) {
        try{
            const result = await axios.patch('http://127.0.0.1:8000/machine/admin_withdraw', 
            {withdraw_amount: amount});
            return result.data            
        }catch (error){
            alert(String(error.response.data[Object.keys(error.response.data)]))
        }
    }
}

export class transactionController {
    constructor(){}

    async cancelTransaction() {
        try{
            const result = await axios.patch('http://127.0.0.1:8000/machine/user_cancel_transaction');
            return result.data            
        }catch (error){
            alert(String(error.response.data[Object.keys(error.response.data)]))
        }
    }
}
