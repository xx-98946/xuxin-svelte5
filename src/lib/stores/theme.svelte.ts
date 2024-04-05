type ITheme = 'light' | 'dark';

function useTheme() {
    const initValue = (localStorage.getItem('theme') || 'light') as ITheme;
    let value: ITheme = $state(initValue);

    function setTheme(newValue: ITheme) {
        value = newValue;
        localStorage.setItem('theme', newValue);
        switch (newValue) {
            case 'dark':
                document.body.classList.add('dark');
                break;
            case 'light':
                document.body.classList.remove('dark');
                break;
        }
    }

    function toggleTheme() {
        setTheme(value == 'dark' ? 'light' : 'dark');
    }

    return {
        get theme() {
            return value;
        },
        set theme(newValue: ITheme) {
            setTheme(newValue);
        },
        toggleTheme
    };
}

export const themeStore = useTheme();
