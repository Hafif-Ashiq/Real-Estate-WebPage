
import house1 from "../assets/house1.jpg"
import house2 from "../assets/house2.jpg"
import house3 from "../assets/house3.jpg"
import house4 from "../assets/house4.jpg"
import Heart from "../assets/Heart.svg"
import Graph from "../assets/Graph.svg"
import Location from "../assets/Location.svg"
import Sheild from "../assets/Shield.svg"
import Star2 from "../assets/Star2.svg"
import Star from "../assets/Star.svg"
import profile1 from "../assets/profile1.png"
import profile2 from "../assets/profile2.jpg"
import profile3 from "../assets/profile3.jpg"


const navLinks = ["Home", "Property", "About", "Service", "Contact"]


const dropDowns = [
    {
        title: "Location",
        list : ["Lahore", "Islamabad", "Multan", "Rawalpindi", "Karachi", "Peshawar", "Quetta"],
    },
    {
        title: "Type",
        list : ["House", "Flat", "Upper Portion", "Lower Portion", "PentHouse", "Room"],
    },
    {
        title: "Price Range",
        list : ["$20k - $50k", "$50k - $70k", "$70k - $100k", "$100k - $150k"],
    },
]

const houses= [
    {
        id: 1,
        name: "Luxury House",
        location: "Johar Town, Lahore",
        price: "$25,000",
        img: house1,
        area: "1 kanal"

    },
    {
        id: 2,
        name: "Luxury House",
        location: "F6/4, Islamabad",
        price: "$35,000",
        img: house2,
        area: "1.5 kanal"

    },
    {
        id: 3,
        name: "Luxury House",
        location: "Sattelite Town, Rawalpindi",
        price: "$40,000",
        img: house3,
        area: "2 kanal"

    },
    // {
    //     name: "Luxury House",
    //     location: "Bahria Phase 7, Rawalpindi",
    //     price: "$100,000",
    //     img: house4,
    //     area: "5 kanal"

    // },
    // {
    //     name: "Luxury House",
    //     location: "DHA phase 2, Lahore",
    //     price: "$27,500",
    //     img: house1,
    //     area: "15 Marla"

    // },
]

const reviews = [
    {
        name: "Jaydon Aminoff",
        prof: "UX Designer",
        bold: "It proved to be exactly the kind of home we wanted.",
        para: "We wish to express our thanks for your hard work in finding us a temporary home, which proved to be exactly what we wanted.",
        img: {profile1}
    },
    {
        name: "Alfredo Donin",
        prof: "UI Designer",
        bold: "Nobody knows Portland and the peninsula better than David.",
        para: "My wife and I had a dream of downsizing from our house in Cape Elizabeth into a small condo closer to where we work and play in Portland. ",
        img: {profile2}
    },
    {
        name: "Makenna Korsgaard",
        prof: "UX Researcher",
        bold: "He keeps his client’s best interests in sharp focus",
        para: "After working with David to sell my home in 2013, I was convinced that he’s the only realtor I’ll ever need. Since then, I’ve bought two properties and sold one.",
        img: {profile3}
    },

]

const qualities = [
    {
        icon: Heart,
        heading: "Comfortable",
        para: "Enjoy lifestyle amenities designed to provide every homeowners modern comfort, a stone's throw away from schools, churches, and hospitals."
    },
    {
        icon: Sheild,
        heading: "Extra Security",
        para: "You can connect with potential tenants without having to share your phone number. We also require all users to register to validate their legitimacy."
    },
    {
        icon: Star,
        heading: "Luxury",
        para: "Find out how we provide the highest standard of professional property management to give you all the benefits of property."
    },
    {
        icon: Star2,
        heading: "Best Price",
        para: "Not sure what you should be charging for your property? Let us do the numbers for you—contact us today for a free rental appraisal on your home."
    },
    {
        icon: Location,
        heading: "Strategic location",
        para: "located in the city center close to the shopping center. Very good for areas surrounded by international education centers, start-up office centers."
    },
    {
        icon: Graph,
        heading: "Efficient",
        para: "Schedule visits to multiple properties at once in one day without having to call them one by one. Check everything and find the best properties for rent"
    },
]

const footerLinks = [
    {
        title: "Service",
        links: ["About Us", "Contact", "Terms & Conditions", "Privacy & Policy"]
    },
    {
        title: "Check This",
        links: ["Find agents", "Lifestyle"]
    },
    
    
]


export {
    navLinks,
    dropDowns,
    houses,
    qualities,
    reviews,
    footerLinks
}