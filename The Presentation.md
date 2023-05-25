Canva slides: https://www.canva.com/design/DAFiamq459w/RQOuWtZKtsi1ESkLOixaFw/edit?utm_content=DAFiamq459w&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton 

https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/about-writing-and-formatting-on-github

https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables

# Part I: Problems
Rising emissions in Vietnam: Vietnam’s rapid economic growth, urbanization, and industrialization have made the country’s emission levels increase substantially by 515% over the past two decades, from 53 million tons of GHG in 2000 to 326 million tons of GHG in 2021. Similarly, GHG emissions per capita increased by 362% during the same period, from 0.7 metric tons in 2000 to 3.24 metric tons in 2021 (countryeconomy n.d.). This made Vietnam become one of the largest GHG emitters in South East Asia (Statista n.d.) **→** These alarming statistics act as a wakeup call for individuals and organizations to take actions and initiatives to reduce their emissions. 

Education sector’s modest participation: The education sector also generates a substantial amount of footprints; therefore, they should play a pioneering role in reducing their emissions. However, higher education institutions in Vietnam have still played little role in contributing to the overall reduction of GHG emissions (Thang 2020). Universities, as organizations engaged in education, should be examples of sustainable organizations that implement initiatives to reduce their carbon footprints (Valls-Val and Bovea 2022). As RMIT students, we want to join hands with our university to lead the way in reducing the education sector’s carbon emissions. 

Young consumers’ lack of environmental knowledge and interest: UNDP (2022) reported that many young people still lack access to knowledge, skills, and tools that help them understand the current situation of climate change and provide them guidance to mitigate their environmental impacts. Back to our community, in fact, there is still no tool yet that helps RMIT students track their daily emissions.


# Part II: Solution
## Design and Features

We proudly present to you our solution, RMITGreen. 

To foster an institutional culture of sustainability, our group aims to develop a mobile- and web-based carbon footprint tracking app called RMITGreen, designed for RMIT students to help them estimate their daily activities’ environmental effects. It will also provide students with educational resources to increase their environmental conscience and guide them on how to offset their footprints
<show the UI design we made on Figma>

input data for calculation through survey. there will be descriptions and requirements for each section, including what the input unit is, as well as navigation buttons to move to the next or the previous section. <show an example: in the transportation section, there will be options for walking, cycling, motorbiking, taxis, or cars because different types of vehicles will need different carbon footprint calculation formulas.>

after entering the data, there will be a "Submit" button, and the score will be displayed at the top, accompanied by a chart below to describe the ratio between the inputs. user can see how their score compares to the average score of other users. there will be tips to improve one's carbon footprint.

We initially wanted to develop both mobile and web apps at the same time, but now we will focus on the web version first, then port it to Android and iOS. Most of the interfaces and features will be identical. 



A sample page of the web version:

Download page:



Differentiation: RMITGreen is designed to provide users with a reference for their carbon footprint emissions while also ensuring data privacy. Therefore, the app will rely solely on survey-based input for calculations and do not request access to sensitive information such as bank accounts, GPS, or calendar apps like other carbon footprint calculator apps on the market.
  
Profit: Our app is not currently designed to generate profit, but we remain open to financial support at a later stage. If our project is successfully implemented, we plan to raise funds through crowdfunding, partnerships, and grants. However, our app's mission and users' privacy will always be our top priorities (Frankenfield 2022; Redshaw Advisors n.d.).
  
Opportunities: This project could raise awareness about environmental issues so people can adjust their habits and behaviours to minimise harmful actions to the planet. 
  
Description
Our app will utilise different calculation methodologies (e.g., input-output analysis, activity-based, fuel-based, spend-based approaches) to estimate an average student's GHG emissions based on their input about their behavior in activities that are considered students' typical emission sources, including dining, daily commutes, and water and electricity use at home or in class.

# Part III: Tools and Technology, App Demo

## Tools and Technologies

We deliver our product as a website; hence, it needs to have a good presentation layer (frontend) as well as a good data access layer (backend). Firstly, frontend should involve an easy-to-use and understandable UI (User Interface) which can be designed on a collaborative web application called Figma. Then, the prototype on Figma will be transformed into a real website using programming languages such as JavaScript, HTML, and CSS. Therefore, we need a text editor to code which can vary from built-in ones such as Notepad for Windows, TextEdit for MacOS to third-party editors (Vim, Visual Studio Code). We will upload all the code onto Github to facilitate collaboration and track other team members’ activities, as well as the website's version history. Then, we will move to the backend section. For architecture, Java is the most common and oldest language that still exists to this day and takes important roles in building and maintaining backend components. Lastly, we decide to implement an Oracle database server using its procedural language, PL/SQL. 


Designing UI/UX: Figma

  Programming languages: HTML, CSS, JavaScript, Java

  Main framework: React Native

  Main IDE: Visual Studio Code

  Collaborative workspace: GitHub

  Hosting the website and database: Cloud services


## Skills
  
We need both technical skills and soft skills to complete our project. First, having a strong foundation in programming languages like HTML, CSS, and JavaScript will help us create this software and make it function. Additionally, managing the data of application users requires knowledge of the PL/SQL language and how to operate Oracle's database server. We can basically learn and apply the skills mentioned above through classroom lectures. Further, it's simple to find online programming courses these days. Students from RMIT in particular are welcome to sign up for free courses on LinkedIn Learning, which is even more convenient. But creating an application requires a lot more expertise than that. An example is design skills, understanding and applying UI/UX concepts is necessary. Teamwork skills are also crucial because developing an application requires more than one individual. Therefore, it is essential to have a collaborative environment like GitHub to make comments, feedback and suggestions easier. Soft skills like effective communication and project management cannot totally be learned through books. So it is important to learn those from both the instructor's advice and the experiences of other students.


Strong foundation in programming languages, database server.

  Design skills, understanding and applying UI/UX concepts.

  Get used to a collaborative environment like GitHub.

  Soft skills like effective communication and project management.
  
**Figma design:** https://bit.ly/RMITGreen-Figma

# Part III: Scope and Limits

Scope:
Data Gathering: The application would compile student’s information on travel, energy use, diet, and other elements that affect their carbon footprint.
Calculation of Carbon Footprint: Using public API and the information gathered, the app would determine the user's carbon footprint.
Advice: The software would offer tips for users to lower their emissions based on their carbon footprint. The advice could be taking a bus or eating plant-based food.
Education: The app can be used to educate users about how various actions and products affect the environment. Students may be encouraged to make better and greener selections.
Social elements: The students have a place to share progress, tips, or even participate in competition which is one of the most powerful motivators for changing behavior.

Limitation
Accuracy of data collection: The app cannot track student’s data automatically but still requires manual input from them; hence, the data given by the user may not be accurate or reliable.
Student engagement: This process needs a long run of effort to see progress, which can make them lose interest and motivation.
Lack of calculating categories: there are lots of other activities that can emit carbon. However, we use an API that can only calculate certain categories; therefore, the application cannot cover all the activities.


# Part IV: Impact
If the application is successful in assisting RMIT students in controlling and measuring their carbon footprints, the result will be a decrease in carbon emissions for the RMIT community, since it can encourage RMIT students to adopt more sustainable behaviours. While students alone may not be able to solve the problem of global climate change fully, increased awareness still leads to a cultural change toward greener practices, which might then spread to other aspects of their lives and beyond. Furthermore, the application can act as a model for other academic institutions to emulate and possibly pave the way for a more sustainable future for all. Being one of the first carbon footprint calculators for the school, students can now use the tool to build a community where people with the same passion can share tips and advice as well as collaborate to reduce carbon footprint. Lastly, the project could also attract a large number of users due to its wide compatibility and convenience because it will be available on web, iOS and Android.
Script: The result will be a decrease in carbon emissions for the RMIT community, since it can encourage RMIT students to adopt more sustainable behaviours. Increased awareness by giving tips can lead to a cultural change toward greener practices, which might then spread to other aspects of their lives and beyond. Furthermore, the application can act as a model for other academic institutions to emulate and possibly pave the way for a more sustainable future for all. Students can now use the tool to build a community where people with the same passion can share tips and advice as well as collaborate to reduce carbon footprint. Lastly, the project could also attract a large number of users due to its wide compatibility and convenience because it will be available on web, iOS and Android.

# Potential questions:

We planned to calculate the GHG emissions by calling an API from Swagger (Swagger n.d.). We decided to use cloud services because of its advantages in terms of time, money, effort, human resources, etc. Moreover, if our system works well and we want to expand it outside RMIT, we can upgrade the system with ease using cloud. 
  
We are aware that creating native applications improves performance and user experience, which might be our goal for the future once we have a larger customer base. If we design the original application as native one, it will take time to develop it for another operating system as its lack of code reusability, but we can save time if we develop our software as cross platform because of its high reusability of code. Currently, we only propose to develop the program in a cross-platform approach. For now, we’ll use React Native as the main framework for this project. 
  
While we acknowledge the potential benefits of using AI to enhance our app's accuracy and reliability in areas such as emissions estimation, progress tracking, and personalized recommendations, we have decided against its implementation due to limited resources, a small customer base, and data privacy concerns.
  
Marketing of our website and app, to ensure that our target audience knows about our project and fully understands its value proposition. We believe it is crucial to reach as many consumers as possible with this application. To notify RMIT students about this application, we will first get in touch with RMIT Student Council or other clubs. Later, we might create our own social networking pages to market to people outside the university.
  
It is essentially to ensure that the marketing of our website and app help our target audience understand the value of our project. We aim to reach as many people as possible with our application. To notify RMIT students about our app, we plan to engage with the RMIT Student Council and other clubs. As we expand beyond the university, we may create social networking pages to reach a broader audience. Our marketing efforts will focus on highlighting the app's unique features, such as its survey-based calculations, privacy protection, and ability to support sustainable practices.

# References
1. https://countryeconomy.com/energy-and-environment/co2-emissions/vietnam
2. Valls-Val K and Bovea M (2022) ‘Carbon footprint assessment tool for universities: CO2UNV’, Sustainable Production and Consumption, 29(2022):709-804, doi:10.1016/j.spc.2021.11.020.
3. https://www.statista.com/statistics/1288198/asean-co2-emissions-by-country/#:~:text=At%20about%20619%20million%20metric,in%20the%20Asia%2DPacific%20region 
4. https://repository.vnu.edu.vn/bitstream/VNU_123/133435/1/KY_20211017233601.pdf 
https://www.undp.org/sites/g/files/zskgke326/files/2022-11/UNDP2022_Report%20new_111122.pdf 
