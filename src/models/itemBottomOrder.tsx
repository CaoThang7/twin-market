export type ListBottomOrder = {
    isVisible: boolean
    onPress(): void
    onPressChooseAddress(): void
    onPressConfirm(): void
    titleOrder: string
    titlePayment: string
    titleAddress: string
    titleCash: string
    subTitleCash: string
    txtBtn: string
    txtBtnConfirm: string | any
    txtAddress: string
    txtChooseAddress: string
}