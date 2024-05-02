import React, { useState, useEffect, useRef } from "react";
import "./discover.css";
import Card from "../../components/card/card";

function Discover() {
  const [page, setPage] = useState(1);
  const [art, setArt] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const containerRef = useRef(null);
  const totalDisplayedArtworks = useRef(0);

  const imageURL = ({ image_id }) =>
    `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`;

  const fetchArtworks = async () => {
    if (!hasNextPage || loading) return;

    setLoading(true);

    try {
      const response = await fetch(
        `https://api.artic.edu/api/v1/artworks?limit=12&page=${page}`
      );
      const { data, pagination } = await response.json();
      // console.log(pagination);
      // console.log(page);
      setArt((prev) => [...prev, ...data]);
      setHasNextPage(pagination.next_url !== null);
      // console.log(page);
      setLoading(false);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error fetching artworks:", error);
    }
  };
  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const { scrollTop, clientHeight, scrollHeight } = container;
      if (scrollHeight - scrollTop === clientHeight) {
        fetchArtworks();
      }
    }
  };

  useEffect(() => {
    fetchArtworks();
  }, [page]);

  useEffect(() => {
    totalDisplayedArtworks.current = art.length;
  }, [art]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="discover-container" ref={containerRef}>
      <h1>Discover Art</h1>
      <div className="images">
        {art.slice(0, totalDisplayedArtworks.current).map((artwork, index) => (
          <Card key={index} artwork={artwork} imageURL={imageURL} />
        ))}
      </div>
      {loading && <div className="loader">Loading</div>}
      {!hasNextPage && <div className="end-message">End of artworks</div>}
    </div>
  );
}

export default Discover;
