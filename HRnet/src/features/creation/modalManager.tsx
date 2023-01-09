import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import './modalManager.scss';

interface ModalProps {
  children: any
  isOpen: boolean;
  title: string;
  isRouter: boolean;
  routerTitle?: string;
  routerLink?: string;
  size: string
}

const ModalManager = ({children, isOpen, title, isRouter, routerTitle, routerLink, size} : ModalProps) => {
  const navigate = useNavigate();

  const [opening, setOpening] = React.useState<boolean>(false);
  const [headerTitle, setHeaderTitle] = React.useState<string>('');
  const [footerRouterTitle, setFooterRouterTitle] = React.useState<string>('');
  const [footerRouterLink, setFooterRouterLink] = React.useState<string>('');

  React.useEffect(() => {
    setOpening(isOpen);
    setHeaderTitle(title);

    if(isRouter === true){

      if(routerTitle != undefined){
      setFooterRouterTitle(routerTitle);
      }

      if(routerLink != undefined){
        setFooterRouterLink(routerLink);
      }
    }
  }, [isOpen, title, routerTitle, routerLink])

  const toDisplay = () => {
    navigate(footerRouterLink);
  }

  const close = () => {
    setOpening(false);
  }


  return (
    <>
      {
        opening ===  true ?
        <div className='modalManager'>
          <div className={`modalManager__bloc ${size}`}>

            <header>
              <div className='header__left'>{headerTitle}</div>
              <div className='header__right'>
                <Button variant="contained" onClick={() => close()}> X </Button>
              </div>
            </header>

            <div className={`${isRouter === true ? 'body' : 'bodyWithoutFooter'}`}>
              {children}
            </div>

            {
              isRouter === true ?
              <footer>
                <Button variant="contained" onClick={() => toDisplay()}> {footerRouterTitle} </Button>
              </footer>
              :
              null
            }
            
          </div>
        </div>
        :
        null
      }
    </>
  )
}

export default ModalManager;