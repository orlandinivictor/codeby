import { Box, Typography } from "@material-ui/core";

import { styles } from "./styles";

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  const classes = styles();

  return (
    <Box className={classes.header}>
      <Typography className={classes.title}>{title}</Typography>
    </Box>
  );
}
