import React from "react";
import "./App.css";

const Card = ({ children }) => (
  <div
    style={{
      background: "#fff",
      borderRadius: "1rem",
      padding: "1.5rem",
      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
      marginBottom: "3rem",
      borderLeft: "4px solid #555",
      paddingLeft: "1.5rem",
    }}
  >
    {children}
  </div>
);

const CardContent = ({ children }) => <div>{children}</div>;

const Timeline = ({ children }) => (
  <div
    style={{
      borderLeft: "3px solid #ccc",
      marginLeft: "1.25rem",
      paddingLeft: "1.25rem",
    }}
  >
    {children}
  </div>
);

const TimelineItem = ({ year, children }) => (
  <div style={{ position: "relative", marginBottom: "3rem" }}>
    <div
      style={{
        position: "absolute",
        left: "-2.25rem",
        top: "0",
        backgroundColor: "#000",
        borderRadius: "50%",
        width: "1rem",
        height: "1rem",
      }}
    />
    <h3
      style={{
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginBottom: "1rem",
        color: "#fff",
        fontFamily: "'Playfair Display', serif",
        textShadow: "1px 1px 4px rgba(255,255,255,0.4)",
      }}
    >
      {year}
    </h3>
    {children}
  </div>
);

const releases = [
  {
    year: "2006",
    title: "Inventing Eve",
    description:
      "Their lo-fi, living-room debut: a raw and intimate expression of sisterly harmony, youthful self-discovery, and lyrical vulnerability.",
    image: "/images/inventing-eve.jpg",
    appleMusic: "https://music.apple.com/us/song/caterpillar-eyebrows/218848580",
  },
  {
    year: "2009",
    title: "Stumbling Toward Destiny",
    description:
      "A bold, socially conscious evolution—layered and cinematic—earning four Grammy ballot placements and cementing their voice in the world.",
    image: "/images/stumbling-toward-destiny.jpg",
    appleMusic: "https://music.apple.com/us/song/beautiful-by-my-scars/342308883",
  },
  {
    year: "2012",
    title: "Hold Onto Me",
    description:
      "A quiet rebellion of grace and presence—exploring love, loss, motherhood, and emotional resilience through ambient, sacred soundscapes.",
    image: "/images/hold-onto-me.jpg",
    appleMusic: "https://music.apple.com/us/song/hold-onto-me/570821378",
  },
  {
    year: "2013",
    title: "What About the Girl",
    description:
      "A full-bodied reckoning—a call to visibility and justice for silenced voices. Harmonic protest meets poetic fire in their most provocative work to date.",
    image: "/images/what-about-the-girl.jpg",
    appleMusic: "https://music.apple.com/us/song/what-about-the-girl/601071654",
  },
];

export default function App() {
  return (
    <div
      className="sparkle"
      style={{
        padding: "2rem 1rem",
        maxWidth: "100%",
        margin: "0",
        fontFamily: "'Playfair Display', serif",
        background:
          "linear-gradient(to bottom right, #3a1c4b, #7b3b5f, #e4b9cb)",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          textAlign: "center",
          marginBottom: "1rem",
          color: "#d4af37",
          textShadow: "1px 1px 4px rgba(255,255,255,0.4)",
        }}
      >
        Inventing Eve | Waking Aurora
      </h1>

      <p
        style={{
          textAlign: "center",
          fontSize: "1.25rem",
          maxWidth: "600px",
          margin: "0 auto 2rem",
          color: "#fff",
          textShadow: "1px 1px 4px rgba(255,255,255,0.3)",
        }}
      >
        A journey across decades of sound, soul, sisterhood, and storytelling—from
        the raw spark of their debut to the cinematic rise of their reawakening.
      </p>

      <Timeline>
        {releases.map((release, idx) => (
          <TimelineItem key={idx} year={release.year}>
            <Card>
              <CardContent>
                <img
                  src={release.image}
                  alt={`${release.title} album cover`}
                  style={{
                    width: "100%",
                    maxWidth: "600px",
                    height: "auto",
                    margin: "0 auto 1rem",
                    display: "block",
                    borderRadius: "1rem",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                  }}
                />
                <h2
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: "600",
                    marginBottom: "0.75rem",
                    color: "#fff",
                    textShadow: "1px 1px 4px rgba(255,255,255,0.4)",
                  }}
                >
                  {release.title}
                </h2>
                <p
                  style={{
                    marginBottom: "1rem",
                    color: "#111",
                    textAlign: "center",
                    fontSize: "1.25rem",
                    lineHeight: "1.6",
                  }}
                >
                  {release.description}
                </p>
                <div style={{ marginTop: "1rem", textAlign: "center" }}>
                  <a
                    href={release.appleMusic}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      fontSize: "1.125rem",
                      fontWeight: "600",
                      color: "#3a1c4b",
                      textDecoration: "none",
                      textShadow: "0 0 8px rgba(255,255,255,0.6)",
                      padding: "0.5rem 1rem",
                      borderRadius: "0.5rem",
                      background: "rgba(255,255,255,0.1)",
                    }}
                  >
                    🎧 Listen
                  </a>
                </div>
              </CardContent>
            </Card>
          </TimelineItem>
        ))}
      </Timeline>

      <div
        style={{
          marginTop: "4rem",
          textAlign: "center",
          maxWidth: "700px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h3
          style={{
            fontSize: "2rem",
            marginBottom: "1rem",
            color: "#d4af37",
            textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
          }}
        >
          Legacy & Impact
        </h3>
        <p
          style={{
            fontSize: "1.25rem",
            color: "#fff",
            textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
          }}
        >
          From living rooms in New York to international stages and airwaves,
          Sarah and Jennifer Ray have woven a legacy of authenticity, emotional
          resonance, and sisterhood that has touched hearts and shaped a
          generation of listeners and creators alike.
        </p>
      </div>
    </div>
  );
}