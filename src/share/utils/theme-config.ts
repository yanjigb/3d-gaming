import { theme, ThemeConfig } from 'antd'

export const themeConfig: ThemeConfig = {
  token: {
    colorPrimary: '#1677FF',
  },
  algorithm: theme.defaultAlgorithm,
  components: {
    Layout: {
      siderBg: '#ffffff',
      headerBg: '#ffffff',
    },
    Menu: {
      itemBg: '#ffffff',
      itemColor: 'rgba(0, 0, 0, 0.88)',
    },
    Form: {
      itemMarginBottom: 8,
    },
    Button: {
      colorPrimary: 'oklch(62.7% .265 303.9)',
      colorPrimaryHover: 'oklch(57.7% .265 303.9)',
      defaultActiveBg: 'oklch(62.7% .265 303.9)',
      colorPrimaryBgHover: 'oklch(57.7% .265 303.9)',
      colorPrimaryActive: 'oklch(62.7% .265 303.9)',
    },
  },
}
