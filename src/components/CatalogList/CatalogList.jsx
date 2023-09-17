import { useEffect, useState } from "react";
import { CatalogItem } from "../CatalogItem/CatalogItem";
import { CatalogContainer, Btn, ErrorTitle } from "./CatalogList.styled";
import { useSelector } from "react-redux";
import {
  selectFavoritesList,
  selectFilteredList,
  selectIsLoading,
} from "../../redux/selectors";

import { Loader } from "../Loader/Loader";

export const CatalogList = () => {
  const filteredCatalog = useSelector(selectFilteredList);
  const isLoading = useSelector(selectIsLoading);
  const favorites = useSelector(selectFavoritesList);

  const PER_PAGE = 12;
  const [viewCatalog, setViewCatalog] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setPage(1);
    setTotalPages(Math.ceil(filteredCatalog.length / PER_PAGE));
    setViewCatalog(filteredCatalog.slice(0, PER_PAGE));
  }, [filteredCatalog]);

  const loadMore = () => {
    setViewCatalog((prev) =>
      prev.concat(filteredCatalog.slice(PER_PAGE * page, PER_PAGE * (page + 1)))
    );
    setPage((prev) => prev + 1);
  };
  const isInFavorites = (id) => {
    return favorites.some((favoritesItem) => favoritesItem.id === id);
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : filteredCatalog.length === 0 ? (
        <ErrorTitle>
          Sorry. We don&apos;t have a cars with this requirements
        </ErrorTitle>
      ) : (
        <CatalogContainer>
          {viewCatalog.map((item) => (
            <CatalogItem
              key={item.id}
              item={item}
              favoriteIcon={isInFavorites(item.id)}
            />
          ))}
        </CatalogContainer>
      )}
      {totalPages > page && !isLoading && (
        <Btn onClick={loadMore}>Load More</Btn>
      )}
    </>
  );
};
