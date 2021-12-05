import App from '../../Layouts/App'
import { Inertia } from '@inertiajs/inertia';
import {useState, useEffect} from 'react'
import { usePage } from '@inertiajs/inertia-react';


const Reviews = (props) => {
    const notifications = props.notifications;
    const {csrfToken} = usePage().props;

    const [processedNotifications,setProcessedNotifications] = useState(notifications);

    const handleSubmit=(notificationId)=>{
        $.ajax({
            url: "/read_notification",
            type: "post",
            data: {_token: csrfToken,notificationId: notificationId},
            success:function(response) {
                removeNotification(notificationId);
            },
            error: function (data, textStatus, errorThrown) {
                console.log(data);
            },
        });


    }

    const removeNotification = (id) => {
        const exist = processedNotifications.find((x) => x.id == id);
        if (exist) {
            setProcessedNotifications(processedNotifications.filter((x) => x.id != id))
        }
    };

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
