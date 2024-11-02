import SidebarView from "./SidebarView";
import * as React from 'react';
import { useTodoState } from '../../redux/hooks';
import { useTheme } from "@mui/material";

function SidebarContainer({ handleDrawerClose, open }) {
  const theme = useTheme();
  const { todos } = useTodoState();
  const [ isShowDialog, setIsShowDialog ] = React.useState(false)

  const handleDialogClose = React.useCallback(() => setIsShowDialog(false), [])
  const openDialog = () => setIsShowDialog(true)

  return <SidebarView todos={todos} isShowDialog={isShowDialog} openDialog={openDialog} handleDialogClose={handleDialogClose} handleDrawerClose={handleDrawerClose} theme={theme} open={open} />
}

export default SidebarContainer;