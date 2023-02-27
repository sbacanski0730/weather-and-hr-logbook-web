<h1 style='text-align: center'>
    ⚓ Weather and HR Logbook
</h1>

<p style='text-align: center; font-size: 22px;text-decoration: underline;color:#bb2102 '>Alert! Project still in development! Not all features are introduced.</p>

# 💻 Demo

Check app website: [not on production!]

## 📈 Progress
At the moment, the project is in the initial stage of development. Login and registration page as well as common components - topbar and sidebar were created. The next step is to connect already existing authentication pages with REST API. In the following days, it is planned to create the design of the next pages of the project in two theme versions. Once they are created, they will appear in the README document.

## 🔭 Project Preview

### Common components
Topbar Component - light theme   |  Sidebar Component - light theme
:-------------------------:|:-------------------------:
![Topbar Component - light](https://user-images.githubusercontent.com/72625642/221603224-4a1d81b7-83cc-4a9a-b63f-3b4059502a96.png)  |  ![Sidebar Component - light](https://user-images.githubusercontent.com/72625642/221603352-77ae8e02-476c-446f-80e8-22c04435a6d8.png)

Topbar Component - dark theme  |  Sidebar Component - dark theme
:-------------------------:|:-------------------------:
![Topbar Component - dark](https://user-images.githubusercontent.com/72625642/221439231-e685429e-fb6c-4a66-8b7f-1b990c8d6ffb.png)  |  ![Sidebar Component - dark](https://user-images.githubusercontent.com/72625642/221440836-9d6b5d5e-4926-47bb-ba48-01853b5fb473.png)

### LoginPage - light theme
![LoginPage - light theme](https://user-images.githubusercontent.com/72625642/221604419-2c08ce46-1704-4538-9638-5d334795a738.png)

### LoginPage - dark theme
![LoginPage - dark theme](https://user-images.githubusercontent.com/72625642/221439253-ac1f32d1-d46c-41f6-80a2-18f20ac3aaba.png)

### RegisterPage - light theme
![RegisterPage - dark theme](https://user-images.githubusercontent.com/72625642/221604479-6e1ed964-59ba-4132-b19a-488630e1cf7d.png)

### RegisterPage - dark theme
![RegisterPage - dark theme](https://user-images.githubusercontent.com/72625642/221439280-6c16c134-c89b-4df1-9fc5-169d933e0125.png)


# 📽️ About the project

## 🪕 Introduction

The project was created for the needs of engineering work. The idea for this project was created in hurry and in a sudden rush of ill-conceived ideas. However, 

## ☔ Project API on GitHub

[weather-and-hr-logbook-api](https://github.com/sbacanski0730/weather-and-hr-logbook-api)

## 🦐 Features

- [ ] authentication (classic: email/password and by Google and Facebook)
- [ ] adding new reports containing: report content, date, weather data, etc.
- [ ] editing/deleting existing reports
- [ ] adding employees to account
- [ ] assigning employees to reports
- [ ] preview of reports in list and calendar view
- [ ] setting up notifications for upcoming report deadlines
- [ ] light/dark website theme

## 🚀 Build with

[![React](https://skillicons.dev/icons?i=react&theme=light)](https://pl.reactjs.org/) [![Material-UI](https://skillicons.dev/icons?i=materialui&theme=light)](https://mui.com/)

## 🏚️ Logical Architecture

The Logical Architecture is based on the division into frontend and backend.
Backend is simple REST API which act as an intermediary between frontend and database.

![logicat-architecture](https://user-images.githubusercontent.com/72625642/221438672-9f43bca8-4534-4ee3-a856-13b72b393865.png)


## ✏️ Website Design

> *Website design made by Figma.*

### Colors Palette
After a long time of searching for the right palette of colors referring to the colors of the project's theme. I chose for two main colors for two theme modes, which in their character referred to the colors of the sea. Like now this was the hardest part of designing the website. Those two colors have a big influence for the future project design. The method of selecting colors was based on the selection of the first two colors: primary and secondary to which I later matched their lighter and darker versions.

| Light Theme Colors | Dark Theme Colors |
| ------------------ | ----------------- | 
| <img src='https://user-images.githubusercontent.com/72625642/221609248-c0aea215-7588-426c-9f50-a1cdbad699d1.png' alt='Light Theme Colors' width='500'/> | <img src='https://user-images.githubusercontent.com/72625642/221609015-365e42f6-7417-4e70-b634-fcab57128c6a.png' alt='Dark Theme Colors' width='500'/> | 

### Commom Components

| Light Theme Topbar Component | Dark Theme Topbar Component |
| ------------------ | ----------------- | 
|![Light Theme Topbar Component](https://user-images.githubusercontent.com/72625642/221673384-7a3abe81-b9eb-440f-80d3-1f732cedd8db.png) |![Dark Theme Topbar Component](https://user-images.githubusercontent.com/72625642/221673501-f14681bc-3025-49fa-b9ab-0f6f3151c617.png) |

| Light Theme Sidebar Component | Dark Theme Sidebar Component |
| ------------------ | ----------------- | 
|![Light Theme Sidebar Component](https://user-images.githubusercontent.com/72625642/221673654-db2776d0-07b1-4d05-b8f8-0325c83df4bd.png) |![Dark Theme Sidebar Component](https://user-images.githubusercontent.com/72625642/221673727-c45f27ee-8419-4942-9a18-7497345476c4.png) |

### Authentication Pages

| Light Theme LoginPage | Dark Theme LoginPage |
|-----------------------|---------------------|
|![image](https://user-images.githubusercontent.com/72625642/221671976-60573aa7-8f00-4aa6-9fca-4417129a170e.png)|![image](https://user-images.githubusercontent.com/72625642/221672155-3b8a41d6-b30b-4f74-8186-d39ecc1b0f7d.png)|

| Light Theme RegisterPage | Dark Theme RegisterPage |
|-----------------------|---------------------|
| ![Light Theme LoginPage](https://user-images.githubusercontent.com/72625642/221653879-2130cc8d-ec72-42d4-95d2-4d15acf56225.png) | ![Dark Theme LoginPage](https://user-images.githubusercontent.com/72625642/221670038-45a89d26-5d79-4f5d-ab4d-acfe769ab09c.png) |

## ✍️ Installation Steps

>**Like now this instruction is in beta version - the proper instruction will be created at a later stage of the project. **

> *To run this project you need to have **Node.js** installed.*

1. Clone the repository

    ```bash
    gh repo clone sbacanski0730/weather-and-hr-logbook-web
    ```

2. Go to project directory

    ```bash
    cd weather-and-hr-logbook-web
    ```

3. Install dependencies

    ```
    npm install
    ```

4. Run the app locally

    ```
    npm start
    ```

## ☔ Project API on GitHub

[weather-and-hr-logbook-api](https://github.com/sbacanski0730/weather-and-hr-logbook-api)
