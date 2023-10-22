import useGenre from "../hooks/useGenre";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, isLoading, error } = useGenre();

  if(error) return null;
  if(isLoading) return <Spinner />
  return (
    <List>
      {data.map((x) => (
        <ListItem key={x.id} paddingY='5px'>
          <HStack>
            <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(x.image_background)} /> 
            <Text fontSize='lg'>{x.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
