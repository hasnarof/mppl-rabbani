import App from '../../Layouts/App'

const Reviews = (props) => {
    const notifications = props.notifications;
    console.log(notifications)
    return (
        <App>

            <div id="testimonial" className="container">
                <h1>My Notifications</h1>
                {notifications.map((item, index)=>(
                            <div className="container card shadow">
                                <div className="row">
                                    <div className="col-2 text-center">
                                        <p>{item.data['body']}</p>
                                    </div>
                                </div>
                            </div>

                        ))}
            </div>
        </App>
    )

}

export default Reviews;
