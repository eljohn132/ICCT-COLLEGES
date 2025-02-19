{
    "mapConfig": {
        "defaultCenter": {
            "lat": 14.5995, // Default center coordinates (Kalye Bente Nueve, Philippines)
            "lng": 120.9842
        },
        "defaultZoom": 15 // Adjusted zoom level for a local area
    },
    "apiConfig": {
        "googleMapsApiKey": "AlzaSyr99FDEKoIwbkyW3baPsB6KwDGgYR0W1iQ", // Replace with your actual Google Maps API key
        "libraries": ["geometry", "places"] // Google Maps libraries to load
    },
    "searchBox": {
        "placeholder": "Search for a place", // Placeholder text for the search input
        "width": "300px", // Width of the search input
        "fontSize": "14px" // Font size of the search input
    },
    "features": {
        "autocomplete": true, // Enable autocomplete for the search box
        "placeMarkerOnSelect": true // Place a marker on the map when a location is selected
    },
    "uiConfig": {
        "button": {
            "findLocation": {
                "text": "Find My Location", // Text for the "Find My Location" button
                "backgroundColor": "white", // Button background color
                "textColor": "#4666FF", // Button text color
                "fontSize": "16px", // Button font size
                "padding": "10px 15px", // Button padding
                "borderRadius": "5px" // Button border radius
            }
        },
        "map": {
            "height": "400px", // Height of the map
            "borderRadius": "10px", // Border radius of the map
            "boxShadow": "0 4px 8px rgba(0, 0, 0, 0.2)" // Box shadow for the map
        }
    }
}
