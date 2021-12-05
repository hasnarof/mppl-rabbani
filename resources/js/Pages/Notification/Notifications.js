import App from '../../Layouts/App'
import { Inertia } from '@inertiajs/inertia';
import {useState, useEffect} from 'react'


const Reviews = (props) => {
    const notifications = props.notifications;

    const [processedNotifications,setProcessedNotifications] = useState(notifications);

    const handleSubmit=(notificationId)=>{
        // Inertia.post('/read_notification', {
        //     id: notificationId,
        // }).then((response)=>{
        //     console.log(response);
        // }

        // )
        $.ajax({
            url: "/read_notification",
            type: "post",
            data: {notificationId: notificationId},
        }).then((response)=>{
            console.log(response);
        });
    }

    return (
        <App>
            <div id="notification" className="background-color">
                <div id="testimonial" className="container">
                    <h1>My Notifications</h1>
                    {processedNotifications.map((item, index)=>(
                        <div className="container">
                            { item.data.type == 'transactionNotification' && 
                            <div className="card shadow d-flex flex-row justify-content-between">
                                <div className="">
                                    <p>{item.data['body']}</p>
                                </div>
                                <div id="btn-notif">
                                    <a className="btn btn-primary btn-sm me-2" href={`/transaction/${item.data.transactionId}`} >Lihat Transaksi</a>
                                    <a className="btn btn-secondary btn-sm" href="#" onClick={()=>handleSubmit(item.id)}>Mark as Read</a>
                                </div>
                            </div>}
                        </div>
                    ))}
                </div>            
            </div>
        </App>
    )

}

export default Reviews;
