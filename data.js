

// data.js - Central data storage for Jesus Tribe website

const jesusTribeData = {
    // Site configuration
    siteConfig: {
        name: "Jesus Tribe",
        location: "Covenant Nation Church, Abuja",
        ageGroup: "Teenagers (13-19 years)",
        contactEmail: "teens@jesustribeabuja.org",
        phone: "+234 800 123 4567"
    },
   
    // Upcoming events
    upcomingEvents: [
        {
            id: 1,
            title: "Friday Night Hangout",
            date: "2023-11-10",
            time: "6:00 PM",
            location: "Church Youth Center",
            description: "Join us for an evening of games, worship, and a powerful message about finding purpose as a teenager. Bring a friend!",
            category: "weekly",
            image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 2,
            title: "Community Service Day",
            date: "2023-11-18",
            time: "8:00 AM - 1:00 PM",
            location: "Local Orphanage, Gwarinpa",
            description: "Let's put our faith into action by serving at a local orphanage. We'll be helping with cleaning, playing with kids, and sharing lunch together.",
            category: "service",
            image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 3,
            title: "Worship Night Special",
            date: "2023-11-24",
            time: "7:00 PM",
            location: "Main Church Auditorium",
            description: "An extended time of worship, prayer, and testimony sharing. Come experience God's presence in a powerful way.",
            category: "special",
            image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 4,
            title: "Teen Bible Study Workshop",
            date: "2023-12-02",
            time: "10:00 AM",
            location: "Church Conference Room",
            description: "Learn how to study the Bible effectively. We'll cover different study methods and tools you can use in your personal devotion time.",
            category: "special",
            image: "https://images.unsplash.com/photo-1544717305-2786b8f1a6e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        }
    ],
   
    // Gallery items
    galleryItems: [
        {
            id: 1,
            title: "October Beach Retreat",
            description: "Our annual retreat at Lagos Beach with 80+ teenagers in attendance",
            category: "retreat",
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 2,
            title: "Sunday Worship Session",
            description: "Teens worshipping together during main service",
            category: "worship",
            image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 3,
            title: "Community Service Day",
            description: "Helping clean up a local community park",
            category: "service",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 4,
            title: "Friday Night Games",
            description: "Friendly competition during our weekly hangout",
            category: "fun",
            image: "https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 5,
            title: "Bible Study Session",
            description: "Deep diving into God's Word together",
            category: "events",
            image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 6,
            title: "Worship Team Practice",
            description: "Our talented teens preparing for Sunday service",
            category: "worship",
            image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        }
    ],
   
    // Daily scriptures
    dailyScriptures: [
        {
            verse: "Don't let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity.",
            reference: "1 Timothy 4:12 (NIV)"
        },
        {
            verse: "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
            reference: "Proverbs 3:5-6 (NIV)"
        },
        {
            verse: "I can do all this through him who gives me strength.",
            reference: "Philippians 4:13 (NIV)"
        },
        {
            verse: "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.",
            reference: "Jeremiah 29:11 (NIV)"
        },
        {
            verse: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
            reference: "Isaiah 41:10 (NIV)"
        }
    ],
   
    // Weekly devotionals
    devotionals: [
        {
            week: "Week of November 6, 2025",
            title: "Finding Strength in Quiet Moments",
            scripture: "Psalm 46:10",
            preview: "In a world that's always noisy and busy, God calls us to be still and know that He is God. This week, we explore how to find strength in quiet moments with God.",
            pdfLink: "#"
        },
        {
            week: "Week of October 30, 2025",
            title: "Faith Over Fear",
            scripture: "2 Timothy 1:7",
            preview: "God hasn't given us a spirit of fear, but of power, love, and a sound mind. Learn how to overcome fear with faith in God's promises.",
            pdfLink: "#"
        },
        {
            week: "Week of October 23, 2025",
            title: "Building Genuine Friendships",
            scripture: "Proverbs 27:17",
            preview: "As iron sharpens iron, so one person sharpens another. Discover what the Bible says about building friendships that honor God.",
            pdfLink: "#"
        }
    ]
};

// Make data available globally
window.jesusTribeData = jesusTribeData;







