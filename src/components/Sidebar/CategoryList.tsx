import { UserTodos } from '../../redux/todos/todosSlices';
import List from '@mui/material/List';
import { Link as RouterLink } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Divider from '@mui/material/Divider';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';

function CategoryList({ todos }: { todos: UserTodos }) {
  const customCategories = Object.entries(todos).filter((t) => t[0] !== 'inbox');
  return (
    <>
      <List>
        <RouterLink to="category/inbox">
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText>{todos['inbox'].config.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        </RouterLink>
      </List>
      {customCategories.length ? (
        <>
          <Divider />
          <List>
            {customCategories.map((cat) => (
              <RouterLink key={cat[0]} to={`category/${cat[0]}`}>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <ChecklistRtlIcon />
                    </ListItemIcon>
                    <ListItemText primary={cat[1].config.name} />
                  </ListItemButton>
                </ListItem>
              </RouterLink>
            ))}
          </List>
        </>
      ) : null}
    </>
  );
}

export default CategoryList;
