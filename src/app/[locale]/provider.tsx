'use client'

import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider } from 'antd'

import { themeConfig } from '@/share/utils/theme-config'

interface Props {
  children: React.ReactNode
}

export default function Provider({ children }: Props) {
  return (
    // Extract antd styles to avoid Flash Of Unstyled Content (FOUC)
    <AntdRegistry>
      <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>
    </AntdRegistry>
  )
}
