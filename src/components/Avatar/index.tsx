import { Avatar as ChakraAvatar } from "@chakra-ui/avatar";
import { Grid, GridItem, Link, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
export default function Avatar({ url, size, onUpload, name, website }) {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (url) downloadImage(url);
  }, [url]);

  async function downloadImage(path) {
    try {
      const { data, error } = await supabase.storage
        .from("avatars")
        .download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setAvatarUrl(url);
    } catch (error) {
      console.log("Error downloading image: ", error.message);
    }
  }

  async function uploadAvatar(event) {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      onUpload(filePath);
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      <label
        className="button primary block"
        htmlFor="single"
        style={{ cursor: "pointer" }}
      >
        <Grid templateColumns="repeat(1, 1fr)" gap={1}>
          <GridItem colStart={1} colEnd={2} h="10">
            {uploading ? (
              "Uploading ..."
            ) : avatarUrl ? (
              <ChakraAvatar
                src={avatarUrl}
                alt={`Avatar for ${name}`}
                _hover={{ bg: "gray.600" }}
                className="avatar image"
                style={{ height: size, width: size }}
              />
            ) : (
              <ChakraAvatar name={name} _hover={{ bg: "gray.600" }} />
            )}
          </GridItem>
          <GridItem colStart={6} colEnd={12} h="5">
            <Text fontSize="xl" ml={3}>
              {name}
            </Text>
          </GridItem>
          <GridItem colStart={6} colEnd={12} h="5">
            <Link href={website} isExternal>
              {website}
            </Link>
          </GridItem>
        </Grid>
      </label>
      <input
        style={{
          visibility: "hidden",
          position: "absolute",
        }}
        type="file"
        id="single"
        accept="image/*"
        onChange={uploadAvatar}
        disabled={uploading}
      />
    </div>
  );
}
