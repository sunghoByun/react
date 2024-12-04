import {AccountTree, Home, Info, Mail} from "@mui/icons-material";
import {useState} from "react";
import {
    Box,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";

const menu = [
    {title: '홈', href: 'home.html', icon: Home},
    {title: 'Contact Us', href: 'contact.html', icon: Mail},
    {title: '회사 소개', href: 'company.html', icon: Info},
    {title: '사이트맵', href: 'sitemap.html', icon: AccountTree},
];

export default function MaterialDrawer() {
    const [show, setShow] = useState(false);
    const handleDraw = () => setShow(!show);
    return (
        <>
            <Button onClick={handleDraw}>드로워</Button>
            <Drawer anchor={"left"} open={show}>
                <Box sx={{height: '100vh'}} onClick={handleDraw}>
                    <List>
                        {menu.map(obj => {
                            const Icon = obj.icon;
                            return (
                                <ListItem key={obj.title}>
                                    <ListItemButton href={obj.href}>
                                        <ListItemIcon><Icon/></ListItemIcon>
                                        <ListItemText primary={obj.title}/>
                                    </ListItemButton>
                                </ListItem>
                            );
                        })
                        }
                    </List>
                </Box>
            </Drawer>
        </>
    );
};