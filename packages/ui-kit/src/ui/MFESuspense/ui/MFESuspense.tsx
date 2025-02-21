import { FC, PropsWithChildren, ReactNode, Suspense } from 'react'
import { Loading } from '../../Loading'

interface IMFELoading extends PropsWithChildren {
  loading?: ReactNode
}

export const MFESuspense: FC<IMFELoading> = ({ children, loading }) => {
  return <Suspense fallback={loading ?? <Loading />}>{children}</Suspense>
}
