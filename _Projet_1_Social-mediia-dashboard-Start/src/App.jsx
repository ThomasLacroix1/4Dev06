import { useState } from 'react'
import './App.css'
import SocialMedia from './components/SocialMedia'

function App() {

  let data = {
    title: "Social Media Dashboard",
    text: "Total Followers: 23,004",
    cards1: [
      {
        icon: "icon-facebook.svg",
        name: "@nathanf",
        number: 1987,
        type: "FOLLOWERS",
        icon2: "icon-up.svg",
        text: "12 Today"
      },
      {
        icon: "icon-twitter.svg",
        name: "@nathanf",
        number: 1044,
        type: "FOLLOWERS",
        icon2: "icon-up.svg",
        text: "99 Today"
      },
      {
        icon: "icon-instagram.svg",
        name: "@realnathanf",
        number: "11k",
        type: "FOLLOWERS",
        icon2: "icon-up.svg",
        text: "1099 Today"
      },
      {
        icon: "icon-youtube.svg",
        name: "Nathan F.",
        number: 8239,
        type: "SUBSCRIBERS",
        icon2: "icon-down.svg",
        text: "144 Today"
      }
    ],
    subtitle: "Overview - Today",
    cards2: [
      {
        name: "Page Views",
        icon: "icon-facebook.svg",
        number: 97,
        icon2: "icon-up.svg",
        percentage: "3%"
      },
      {
        name: "Likes",
        icon: "icon-facebook.svg",
        number: 52,
        icon2: "icon-down.svg",
        percentage: "2%"
      },
      {
        name: "Likes",
        icon: "icon-instagram.svg",
        number: 5462,
        icon2: "icon-up.svg",
        percentage: "2257%"
      },
      {
        name: "Profile Views",
        icon: "icon-instagram.svg",
        number: "52k",
        icon2: "icon-up.svg",
        percentage: "1375%"
      },
      {
        name: "Retweets",
        icon: "icon-twitter.svg",
        number: 117,
        icon2: "icon-up.svg",
        percentage: "303%"
      },
      {
        name: "Likes",
        icon: "icon-twitter.svg",
        number: 507,
        icon2: "icon-up.svg",
        percentage: "553%"
      },
      {
        name: "Likes",
        icon: "icon-youtube.svg",
        number: 107,
        icon2: "icon-down.svg",
        percentage: "19%"
      },
      {
        name: "Total Views",
        icon: "icon-youtube.svg",
        number: 1407,
        icon2: "icon-down.svg",
        percentage: "12%"
      }
    ]
  }

  return (
    <SocialMedia ></SocialMedia>
  )
}

export default App
