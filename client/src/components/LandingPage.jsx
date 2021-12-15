
import react from 'react';
import '../css/LandingPage.css';


const LandingPage = props => {
    const {mobile,setMobile} = props;

    return (
        <main>
            <section className="container">
                <div>
                    <h1 className={mobile ? "imgTextMobile" : "imgText"}>Track Tasks</h1>
                    <h1 className={mobile ? "imgTextMobile" : "imgText"}>Follow Your Progress</h1>
                </div>
            </section>
            <section className='landingMain'>
                <h1>something</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatem reiciendis repellendus atque veritatis tempore nulla autem a. Quisquam voluptatibus voluptas explicabo consequuntur reprehenderit culpa ullam labore eos temporibus iusto!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab autem numquam nisi. Nesciunt ipsam culpa dolor molestiae reprehenderit ratione ab doloribus, quis assumenda, ducimus autem perspiciatis itaque, labore beatae? Fuga.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate commodi tempora repudiandae minima, recusandae mollitia quaerat sequi! Modi odio sapiente numquam illum adipisci, assumenda in, accusantium impedit sed obcaecati a!</p>
            </section>
        </main>
    )
}
export default LandingPage;