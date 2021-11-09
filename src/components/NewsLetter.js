import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

const NewsLetter = () => {
    return(
        <div className="contact" id="contact">
		<div className="container">
			<h3>Contact Us</h3>
			<form action="http://texaspatiosandconcrete.com/page/contactform.php" method="post" className="contact_form">
                <input type="text" className="margin-right" name="name" placeholder="Name" required="" />
				<input type="email" name="email" placeholder="Email" required="" />
				<input type="text" className="margin-right" name="phone" placeholder="Phone Number" required="" />
				<textarea name="message" placeholder="Message" required></textarea>
				<input type="submit" className="more_btn" value="Send Message"></input>
			</form>
		</div>
	    </div>
    )
}

export default NewsLetter