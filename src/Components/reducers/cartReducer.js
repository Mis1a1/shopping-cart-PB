import item1 from '../../images/item1.jpg'
import item2 from '../../images/item2.jpg'
import item3 from '../../images/item3.jpg'
import item4 from '../../images/item4.jpg'
import item5 from '../../images/item5.jpg'
import item6 from '../../images/item6.jpg'
import item7 from '../../images/item7.jpg'
import item8 from '../../images/item8.jpg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        {
            "id": "5b2760ac4613bc8ecb5693f6",
            "name": "name4",
            "img": item1,
            "price": 300,
            "description": "green"
        },
        {
            "id": "5b2760ace5b025b50a1f7d87",
            "name": "name4",
            "img": item2,
            "price": 850,
            "description": "brown"
        },
        {
            "id": "5b2760ac74f355323578d65a",
            "name": "name1",
            "img": item3,
            "price": 400,
            "description": "blue"
        },
        {
            "id": "5b2760acfb01a505d3ac3139",
            "name": "name4",
            "img": item4,
            "price": 1015,
            "description": "blue"
        },
        {
            "id": "5b2760acadaaef2ce88a7ada",
            "name": "name2",
            "img": item5,
            "price": 700,
            "description": "blue"
        },
        {
            "id": "5b2760acec7c62d65dd1f1cb",
            "name": "name3",
            "img": item6,
            "price": 700,
            "description": "brown"
        },
        {
            "id": "5b2760ac89c7d290344e967e",
            "name": "name2",
            "img": item7,
            "price": 200,
            "description": "brown"
        },
        {
            "id": "5b2760ac1f5a45bb433bd7ee",
            "name": "name2",
            "img": item8,
            "price": 850,
            "description": "brown"
        }
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{


    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1
             return{
                ...state,
                 total: state.total + addedItem.price
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price

            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }

        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)

        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)

        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }

    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }

    return state
}

export default cartReducer
