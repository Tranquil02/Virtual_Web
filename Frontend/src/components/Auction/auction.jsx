import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Button } from "react-bootstrap";
import moment from "moment";
import "./auction.css"; // Import CSS file
import { Link } from "react-router-dom";

const BlogItem = ({ blog }) => {
  return (
    <article className="artCont">
      <div className="image">
        <img src={blog.image} alt="" className="img-fluid w-100" />
        <div className="auction-calendar date">
          {moment(blog.date).format("D")}
          <br />
          {moment(blog.date).format("MMM")}
          <br />
          {moment(blog.date).format("Y")}
        </div>
      </div>
      <div className="ArtDetails">
        <p className="ArtAuthor">
          By{" "}
          <a href="#!">
            {blog.author}
          </a>
        </p>
        <h4 className="auction-title">{blog.title}</h4>
        <p className="auction-description ">{blog.description}</p>
        <Button variant="" className="auction-btn-read-more">
          Participate
        </Button>
      </div>
    </article>
  );
};

BlogItem.propTypes = {
  blog: PropTypes.object.isRequired,
};

const Blog3 = () => {
  const blogs = [
    {
      title: "Not Your Regular Home Decoration?",
      description:
        "Urna molestie at eleme ntum eu facilisis sed odio Male suada fames.",
      author: "Alex Hales",
      date: "2020-01-17 18:01:34",
      image: "https://cdn.easyfrontend.com/pictures/blog/blog_3.jpg",
    },
    {
      title: "How I’m Styling Everyday Black Outfits",
      description:
        "It’s no secret that the digital industry is booming. From exciting startups to global brands.",
      author: "Mitwa Dadkan",
      date: "2020-01-16 18:01:34",
      image: "https://cdn.easyfrontend.com/pictures/blog/blog_9.jpg",
    },
    {
      title: "Fashion Essentials All Men Should Know",
      description:
        "More off this less hello salamander lied porpoise much over tightly circa horse taped.",
      author: "Mahws Georgia",
      date: "2020-01-17 18:01:34",
      image: "https://cdn.easyfrontend.com/pictures/blog/blog_14_1.jpg",
    },
  ];

  return (
    <section className="auction">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h2 className="auction-heading mb-3 mt-0 ">
              Auctions
            </h2>
            <p className="auction-sub-heading">
              Sed ut in perspiciatis unde omnis iste natus error sit on i tatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae.
            </p>
            <Button variant="" className="auction-btn">
              All Auctions
            </Button>
            <Button variant="" className="auction-btn">
              <Link to="/auction/create">
              Create Auction
              </Link>
            </Button>
          </Col>
        </Row>
        <Row className="mt-5 page_art">
          {blogs.map((blog, i) => (
            <Col md={4} key={i} className="mb-3">
              <BlogItem blog={blog} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Blog3;
