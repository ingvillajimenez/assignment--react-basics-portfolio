import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        return(
            <section>
                <div class="contactinfo">
                    <a class="contactinfo__single" target="_blank">
                        <i class="ion-ios-location-outline contactinfo__icon"></i>
                        <span class="contactinfo__title">Mexico City, Mexico</span>
                    </a>
                    <a href="#" class="contactinfo__single" target="_blank">
                        <i class="ion-ios-email-outline contactinfo__icon"></i>
                        <span class="contactinfo__title">ing.villa.jimenez@gmail.com</span>
                    </a>
                    <a href="#" class="contactinfo__single" target="_blank">
                        <i class="ion-social-github-outline contactinfo__icon"></i>
                        <span class="contactinfo__title">ingvillajimenez</span>
                    </a>
                    <a href="#" class="contactinfo__single" target="_blank">
                        <i class="ion-social-linkedin-outline contactinfo__icon"></i>
                        <span class="contactinfo__title">juan-alberto-villa-jiménez-793b0035</span>
                    </a>
                </div>
            </section>
        );
    }
}

export default ContactInfo;