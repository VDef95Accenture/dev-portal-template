# Introduction 
This repository contains files for the Developer Portal Documentation implementation.

# Getting Started
The files included are for the documentation frontend, built with Docusaurus. TypeScript is the main language used.

## Software Dependencies
The following dependencies are needed for this project:
- Node version 19 or higher
- An appropriate terminal (For development, Windows users will need to use Git Bash or PowerShell for example)

## Software Recommendations
The following items are recommended:
- Node Version Manager (or one of its alternatives)

## Installation Process
The following steps describe how to get the frontend running:
1. Clone the repository
2. In a terminal, go to the repository folder
3. Install NPM packages with the following command, 'npm install'
4. After installation, verify success and check that node_modules exists in the repository folder
5. In a terminal, run the following command to start the local server and frontend, 'npm run start'

# Build
1. In a terminal, go to the repository folder
2. Create the build with command "npm run build"
3. After creating the building package, copy it to the server to see it online
   
# Test
1. Use `npm run serve` command to test your build locally.

# Translate
## Site configuration
Button select languages 
1. Add the abbreviation of the language you want translated to the docusaurus.config.js file in i18n:{locales[..., newAbbrevation]}
2. Add the writing of the language you want to display in the select to the docusaurus.config.js file in i18n:{localeConfigs: {newAbbrevation: {label: 'textToDisplay'},}}
   
## Translate your React code 
Translate json files
1. Open terminal in the project package
2.  Run the code npm run write-translations -- --locale newAbbrevation
3.  Check that the new folder with the abbreviation of the added language has been added in the i18n folder of your project
4.  Now open the created folder and translate the json file into the new language, add translation to "message": "your translation" 
  
## Translate Markdown files
1. Copy your docs Markdown files from docs/ to i18n/newAbbreviation/docusaurus-plugin-content-docs/current, and translate them
2. Open the powerShell or linux terminal in the project package
3. Run the code for start copy:
   mkdir -p i18n/newAbbreviation/docusaurus-plugin-content-docs/current
   cp -r docs/** i18n/newAbbreviation/docusaurus-plugin-content-docs/current
4. Now open the created folder and translate the Markdown file into the new language.
5. Remember the change location path the image or attached if you added it in your mdx file.

## Run your code with your translate on local server
1. Open terminal in the project package
2. Run the code for start your local lenguage selected site:
   npm run start -- --locale newAbbreviation

# Theme configuration
## General configuration
1. Open docusaurus.config.js
2. To configure the language button, edit the items of the type: 'localeDropdown'
3. To configure the logo application, edit the items of the navbar: logo
   
## Variabols configurations
1. Open folder static/config
2. To configure the comunity link open comunity/constants.js and change the links
3. To configure the resouces link open resources/constants.js and change the links
4. To configure the header titols open homePageHeader/constants.js and change the titols
5. To configure the topics descriptions open homePageTopics/constants.js and change the descriptions
   
## Image web pages 
1. Open folder static/img
2. Copy your favicon images into folder logos and remember the changes logo configuration with name of new your logo
3. Copy your new component images into folder graphics to later use them in your components
4. Copy your web images into folder banners and add the path into the mkd file of where you whant to display them
5. Copy the icon images into the folder to later use them in your navigation components

## Image into mdx file
1. Open folder static/img/mdx_image
2. Copy your images into mdx name folder
3. add tag <!-- ![image.png](path position your image) --> in your mdx file 
4. if you have a two image, one for the dark mode and one for the light mode, you can add follow tags in your mdx file for use the switch image:
      <!--

      import ThemeDependentImage from '@site/src/components/ThemeDependentImage/ThemeDependentImage.js';

      <ThemeDependentImage 
         image1="path position your image"
         image2="path position your image"
         style={{marginBottom: "1rem"}}
      />

      -->
5. Remember that the paths start from the static folder of the project

## Attached file into mdx file 
1. Open folder static/mdx_attachments
2. Copy your file into mdx name folder
3. add tag <!-- [NameYourFile.docx](pathYourFile.docx) --> in your mdx file 
4. Remember that the paths start from the static folder of the project

## Font 
1. Open folder static/font
2. Create new folder 
3. Add a font .ttf file 
4. Add in the global file your font or add it in your component style file where you want to use it

## Style
1. Oper folder src/styles
2. If you want to change the global colors of your website open the colors.scss file and make your changes
3. If you want to change the global style of your home component open the global.scss and make your changes

# Docker 

## Dockerfile
1. You already have a dockerfile ready in your application if you want you can change the configurations
   
## Test and build in local 
1. Download and install docker app
2. Start docker app
3. Open terminal and navigate to the directory where you have the Dockerfile
4. Build the container image using the following commands: docker build <path> -t nameYourImage es in this directory: docker build ./ -t new-image.
5. Show your image in terminal with command: docker images
6. You copy your IMAGE ID 
7. Start your container using the docker run command and specify the ID of the image you just created: docker run -p 3000:8080 IMAGE ID 
8. After a few seconds, open your web browser to http://localhost:3000. You should see your app
