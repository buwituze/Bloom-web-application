import React from "react";
import FarmerNavbar from "./farmernav";
import FarmerFooter from "./farmerfooter";

// Define the type for event data
interface EventData {
  title: string;
  image: string;
}

// Sample data for events
const eventsData: EventData[] = [
  {
    title: "Harvest Meeting  23/July/2024",
    image: "/rwandansuppliers.jpg",
  },
  {
    title: "Huye Farmers Meeting Aug/2024",
    image: "/Farmer-homepage.jpeg",
  },
  {
    title: "Farmer-Supplier Event Aug/2024",
    image: "/rwandansuppliers.jpg",
  },
];

const EventCard: React.FC<{ event: EventData }> = ({ event }) => (
  <div style={eventCardStyle}>
    <img
      src={event.image}
      alt={event.title}
      style={{ width: "100%", height: "250px" }}
    />
    <div style={{ padding: "10px" }}>
      <h3 style={eventTitleStyle}>{event.title}</h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button style={rsvpButtonStyle}>RSVP</button>
        <button style={moreButtonStyle}>More</button>
      </div>
    </div>
  </div>
);

const Event: React.FC = () => {
  return (
    <div>
      <FarmerNavbar />
      <div style={{ position: "relative", textAlign: "center" }}>
        <img
          className="header-image"
          style={{ width: "100%", height: "350px" }}
          src="/events.jpg"
          alt="Events Header"
        />
        <div
          className="header-text"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "4em",
            fontWeight: "bold",
          }}
        >
          EVENTS
        </div>
      </div>
      <div style={{ display: "flex", padding: "20px" }}>
        <div
          style={{
            width: "20%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRight: "1px solid rgba(204, 204, 204, 0.80)",
            padding: "10px",
          }}
        >
          <button style={navButtonStyle}>My Events</button>
          <button style={navButtonStyle}>Upcoming Events</button>
          <button style={navButtonStyle}>Past Events</button>
        </div>
        <div style={{ width: "80%", padding: "0 20px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <input
              type="text"
              placeholder="Search Events"
              style={searchInputStyle}
            />
            {/* <button style={searchButtonStyle}>Search</button> */}
          </div>
          <button style={organizeButtonStyle}>Organize Event</button>
          <div style={eventsContainerStyle}>
            {eventsData.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>
      </div>
      <FarmerFooter />
    </div>
  );
};

const navButtonStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  margin: "4px 0",
  borderRadius: "20px",
  // border: "1px solid rgba(204, 204, 204, 0.80)",
  // background: "#157106",
  color: "black",
  textAlign: "center",
  cursor: "pointer",
};

const searchInputStyle: React.CSSProperties = {
  width: "70%",
  padding: "10px",
  borderRadius: "20px",
  border: "1px solid rgba(204, 204, 204, 0.80)",
};

const searchButtonStyle: React.CSSProperties = {
  padding: "10px",
  borderRadius: "20px",
  border: "none",
  background: "#157106",
  color: "white",
};

const organizeButtonStyle: React.CSSProperties = {
  padding: "10px 20px",
  borderRadius: "20px",
  border: "none",
  background: "#157106",
  color: "white",
  marginBottom: "20px",
  display: "block",
  marginLeft: "auto",
};

const eventsContainerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
};

const eventCardStyle: React.CSSProperties = {
  width: "280px",
  margin: "10px",
  borderRadius: "20px",
  border: "1px solid rgba(204, 204, 204, 0.80)",
  overflow: "hidden",
};

const eventTitleStyle: React.CSSProperties = {
  fontSize: "15px",
  fontWeight: "400",
  margin: "10px 0",
};

const rsvpButtonStyle: React.CSSProperties = {
  padding: "5px 10px",
  borderRadius: "10px",
  border: "1px solid rgba(204, 204, 204, 0.80)",
  background: "white",
};

const moreButtonStyle: React.CSSProperties = {
  padding: "5px 10px",
  borderRadius: "10px",
  border: "1px solid rgba(204, 204, 204, 0.80)",
  background: "white",
};

export default Event;
