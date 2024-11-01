import { useSnackbar as useNotistackSnackbar } from 'notistack';

const useSnackbar = () => {
  const { enqueueSnackbar } = useNotistackSnackbar();
  return enqueueSnackbar;
};

export default useSnackbar;