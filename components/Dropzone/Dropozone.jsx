import styled from "@emotion/styled";
import React, { useCallback, useState, useMemo } from "react";
import { useDropzone } from "react-dropzone";

const ContentImg = styled.div`
position: relative;
  width: 10rem;
  height: 10rem;
  display: flex;
  border-radius: 100%;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  @media(max-width: 1024px) {
    width: 5rem;
    height: 5rem;
  }
  .containimg {
    width: 100%;
    height: 100%;
  }
`;


const Dropozone = ({ children }) => {
  const [selectedImage, setSelectedImage] = useState([]);
  const [ istrue, setIstrue] = useState(false)

  const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    borderWidth: 3,
    borderRadius: 1,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
  };

  const focusedStyle = {
    borderColor: "#2196f3",
  };

  const acceptStyle = {
    borderColor: "var(--nextui-colors-bgLoginCardAnimation)",
  };

  const rejectStyle = {
    borderColor: "#ff1744",
  };
  const onDrop = useCallback((acceptFiles) => {-
    setIstrue(true)
    setSelectedImage(
      acceptFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );

  }, []);

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({ onDrop, accept: { "image/*": [] } });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  const selected_Image = selectedImage?.map((file) => (
    <ContentImg>
      <div>
        <img className="containimg" src={file.preview} alt="" />
      </div>
    </ContentImg>
  ));
  return (
    <>
      <div {...getRootProps({ style })}>
        <div {...getInputProps}></div>
        {istrue ?selected_Image : children}
      </div>
    </>
  );
};

export default Dropozone;
