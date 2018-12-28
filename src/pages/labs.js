import React from 'react'
import Section from '../components/Section';
import SectionLab from '../components/SectionLab';

const EgaLabs = () => (
  <div>
     <SectionLab title = "Our Contribution to the Community"
                content ="We truly believe that whatever goes around, comes around. This is why, setting aside time to work on projects what will not only give value back to community of fellow developers but will also contribute to the web progress as a whole, is one of our priorities. Here is what we've created with love."
                image = "https://theme.hstatic.net/1000181505/1000419420/14/labs_header_img.jpg"
                background = "#fff"
                leftBackground = "#fff"
                textColor = "#000"
    />
    <SectionLab title = "React Native Showcase"
                content ="React Native Showcase is a really big list of interesting React Native projects, tutorials, articles and more. These apps do not have to be published to the App Store or anything, they are simply here to showcase work from within the community, and to help React Native developers by seeing how others are building and structuring their applications. 
                To get your project added, please submit this form: https://egany.typeform.com/to/Hvi50y"
                image = "https://theme.hstatic.net/1000181505/1000419420/14/labs_block_img_1.jpg?v=80"
                background = "#eee"
                leftBackground = "#00a0d2"
                textColor = "#fff"
    />
    <SectionLab title = "EGANY Tools"
                content = {`EGANY Utility is a set of Chrome extensions for Sapo, Haravan and Haravan platforms.

                1. Edit the description of the Product and the Message directly outside the user interface, without accessing the Administration page.
                (See instructions https://github.com/egany/EGANY-Utility)<br>
                2. Add / Remove / Modify the MetaField field for the product data type and Customer.<br>
                
                3. Add and delete batch tags to products, customers in just one click
                `}
                image = "https://theme.hstatic.net/1000181505/1000419420/14/labs_block_img_2.jpg?v=80"
                background = "#fff"
                leftBackground = "#fff"
    />
    <SectionLab title = "React Native Freebies"
                content ="React Native Showcase is a really big list of interesting React Native projects, tutorials, articles and more. These apps do not have to be published to the App Store or anything, they are simply here to showcase work from within the community, and to help React Native developers by seeing how others are building and structuring their applications. 
                To get your project added, please submit this form: https://egany.typeform.com/to/Hvi50y"
                image = "https://theme.hstatic.net/1000181505/1000419420/14/labs_block_img_3.jpg?v=80"
                background = "#eee"
                leftBackground = "#ffe88c"
    />
    <SectionLab title = "To be Continue.."
                content ="Please waiting for next awesome contribution.."
                image = "https://theme.hstatic.net/1000181505/1000419420/14/labs_block_img_4.jpg"
                background = "#fff"
                leftBackground = "#fff"
    />
    <Section
      image='http://theme.hstatic.net/1000181505/1000419420/14/call-to-action.jpg'
      logo='/images/logo-react.png'
      title="Think We’d Be a Match?"
      linkTo = "#"
      linkText = "GET STARTED"
     />
  </div>
)

export default EgaLabs
