// 優惠券基本型別
export type CouponData = {
  id: string
  title: string
  is_enabled: number
  percent: number
  due_date: number
  code: string
}

// 建立優惠券參數型別
export type CreateCouponParams = {
  title: string
  code: string
  is_enabled: number // 1=啟用, 0=停用
  percent: number // 折扣百分比
  due_date: number // 到期日期 timestamp 或 yyyyMMdd
}

// 編輯優惠券參數型別
export type EditCouponParams = {
  id: string // 要編輯的 coupon id
  data: {
    title?: string
    code?: string
    is_enabled?: number
    percent?: number
    due_date?: number
  }
}

// 分頁資訊型別
export type Pagination = {
  total_pages: number
  current_page: number
  has_pre: boolean
  has_next: boolean
  category: string
}

// API 回應型別
export type GetCouponsResponse = {
  coupons: CouponData[] | { id: string; title: string; is_enabled: number; percent: number; due_date: number; code: string }[]
  success: boolean
  // coupons
  pagination: Pagination
  messages: unknown[]
}

// 訊息回應型別
type MessageResponse = {
  success: boolean
  message: string
}

export type CreateCouponResponse = MessageResponse
export type EditCouponResponse = MessageResponse
export type DeleteCouponResponse = MessageResponse
