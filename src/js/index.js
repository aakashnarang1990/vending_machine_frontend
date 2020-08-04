import { Products, currencyContoller, transactionController, machine } from './models/Products';
import { renderProducts, clearProducts } from './views/productView';
import { elements } from './views/base';


const state = {};


const machineInitialise = async () => {
    state.machine = new machine();
    var data = await state.machine.getMachineState();
    elements.stateLabel.innerHTML = data.state;
    elements.messageLabel.innerHTML = data.message;
    elements.amountLabel.innerHTML = data.amount;
    elements.totalAmountLabel.innerHTML = data.total_amount;
}

const productRefresh = async () => {
    state.products = new Products();
    clearProducts();
    await state.products.getProducts()
    renderProducts(state.products.productsList)
    }

productRefresh();
machineInitialise();

const insertCurrency = async (currency) => {
    state.currencyContoller = new currencyContoller();
    const x = await state.currencyContoller.addCurrency(currency);
    elements.stateLabel.innerHTML = x.state;
    elements.messageLabel.innerHTML = x.message;
    elements.amountLabel.innerHTML = x.amount;
    elements.totalAmountLabel.innerHTML = x.total_amount;
}
window.insertCurrency = insertCurrency

const dispenseProduct = async (productID) => {
    state.productDispenseController = new Products();
    const x = await state.productDispenseController.dispenseProduct(productID);
    elements.stateLabel.innerHTML = x.state;
    elements.messageLabel.innerHTML = x.message;
    elements.amountLabel.innerHTML = x.amount;
    elements.totalAmountLabel.innerHTML = x.total_amount;
    productRefresh();
}
window.dispenseProduct = dispenseProduct;


const addProduct = async (productID) => {
    state.productAddContoroller = new Products();
    const x = await state.productAddContoroller.addProduct(productID, 
        document.getElementById(`qty-${productID}`).value);
    elements.stateLabel.innerHTML = x.state;
    elements.messageLabel.innerHTML = x.message;
    // elements.amountLabel.innerHTML = x.amount;
    productRefresh();
    // document.getElementById("qty-${productID}").value
}
window.addProduct = addProduct;


const cancelTransaction = async () => {
    state.usertransactionController = new transactionController();
    const x = await state.usertransactionController.cancelTransaction();
    elements.stateLabel.innerHTML = x.state;
    elements.messageLabel.innerHTML = x.message;
    elements.amountLabel.innerHTML = x.amount;
    elements.totalAmountLabel.innerHTML = x.total_amount;
    
}


const withdrawAmount = async (withdrawAmount) => {
    state.currencyContoller = new currencyContoller();
    const x = await state.currencyContoller.withdrawCurrency(withdrawAmount);
    elements.stateLabel.innerHTML = x.state;
    elements.messageLabel.innerHTML = x.message;
    elements.amountLabel.innerHTML = x.amount;
    elements.totalAmountLabel.innerHTML = x.total_amount;
}

elements.productCancelTransaction.addEventListener('click', cancelTransaction);
elements.btnWithdraw.addEventListener('click', e => {
    withdrawAmount(elements.withdrawAmount.value);
})