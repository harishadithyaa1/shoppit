import { useEffect, useState } from "react"
import OrderHistoryItemContainer from "./OrderHistoryItemContainer"
import UserInfo from "./UserInfo"
import Spinner from "../ui/Spinner"
import api from '../../api'

const UserProfilePage = () => {

    const [userInfo, setUserInfo] = useState({})
    const [orderitems, setOrderitems] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(function(){
        setLoading(true)
        api.get("user_info")
        .then(res => {
            console.log(res.data)
            setUserInfo(res.data)
            setOrderitems(res.data.items)
            setLoading(false)
        })
        .catch(err => {
            console.log(err.message)
            setLoading(false)
        })
    }, [])

    if(loading){
        return <Spinner loading={loading} />
    }

  return (
    <div className="container my-5">

        <UserInfo userInfo={userInfo}/>

        <OrderHistoryItemContainer orderitems={orderitems} />
    </div>
  )
}

export default UserProfilePage