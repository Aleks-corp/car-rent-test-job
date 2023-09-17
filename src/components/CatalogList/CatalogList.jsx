import { useEffect, useState } from "react";
import { CatalogItem } from "../CatalogItem/CatalogItem";
import { CatalogContainer, Btn } from "./CatalogList.styled";

import PropTypes from "prop-types";

export const CatalogList = ({ items }) => {
  const PER_PAGE = 12;
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const [viewCatalog, setViewCatalog] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setFilteredCatalog(items);
    setPage(1);
    setTotalPages(Math.ceil(items.length / PER_PAGE));
    setViewCatalog(items.slice(0, PER_PAGE));
  }, [items]);

  const loadMore = () => {
    setViewCatalog((prev) =>
      prev.concat(filteredCatalog.slice(PER_PAGE * page, PER_PAGE * (page + 1)))
    );
    setPage((prev) => prev + 1);
  };
  return (
    <>
      {filteredCatalog.length === 0 ? (
        <p>No Such Cars</p>
      ) : (
        <CatalogContainer>
          {viewCatalog.map((item) => (
            <CatalogItem key={item.id} item={item} />
          ))}
        </CatalogContainer>
      )}
      {totalPages > page && <Btn onClick={loadMore}>Load More</Btn>}
    </>
  );
};

CatalogList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
