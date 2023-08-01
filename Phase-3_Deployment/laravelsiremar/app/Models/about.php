/*
Nirwani Shivam       1001923706
Kataria Kartik       1001944865
Upadhyay Sunil Akash 1001957955
*/
function About() {
    return ( 
    <div id="about">
          <section className="pt-50">
            <div class = "image">
               <figure>
                 <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tropical-island-with-yachts-and-houses-in-bermuda-royalty-free-image-1620659478." alt="Hansueli Krapf" width="600"/>
               </figure>
            </div>

            <div class = "content">
                <h2>About Us</h2>
                {/* <span><!-- line here --></span> */}
                <p> SIREMAR is a website that keeps a tab on the number of
                    residents, provide them with a unique ID and offer them many benefits for registering with
                    us. We then provide the count of all the residents to the government so they can implement
                    an appropriate budget for its residents. </p>
            </div>

        </section><br/><br/><br/>
    </div>
    );
}

export default About;