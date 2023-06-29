import React, { useEffect, useState } from 'react'
import InfoDetail from './components/detail/infoDetail'
import ButtonComponent from '@components/button'
import Loading from '@components/loading'
import Color from "@common/color"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import { StyleSheet, View } from 'react-native'
import { findProductById } from '@services/product'
import { Icon, Header } from "react-native-elements"
import { useNavigation } from "@react-navigation/native"
import { selectValueTheme } from "@redux/selector/theme"
import { RootStackParamList } from '@navigation/mainStack'
import { ScrollView } from 'react-native-virtualized-view'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = NativeStackScreenProps<RootStackParamList, 'DetailProduct'>;

const DetailProduct = ({ route }: Props) => {
    const { t } = useTranslation()
    const [productDetail, setProductDetail] = useState<any>({})
    const [loading, setLoading] = useState(true)
    const mode = useSelector(selectValueTheme)
    const navigation: any = useNavigation()
    const txtTitleDetail: string = t("products:titleDetail")

    useEffect(() => {
        findProductDetailById()
    }, [])

    const findProductDetailById = async () => {
        const data = await findProductById(route.params.productId)
        setProductDetail(data)
        setLoading(false)
    }

    const onGoBackProduct = () => {
        navigation.goBack()
    }

    if (loading) {
        return <Loading color={mode ? Color.colorApp.WHITE : Color.colorApp.BLACK} />
    }

    return (
        <View style={[styles.container, { backgroundColor: mode ? Color.colorApp.BLACK : Color.colorApp.WHITE }]}>
            <Header
                containerStyle={styles.headerStyle}
                leftComponent={
                    <Icon
                        onPress={onGoBackProduct}
                        name={'chevron-back-outline'}
                        type="ionicon"
                        color={mode ? Color.colorApp.WHITE : Color.colorApp.BLACK}
                        size={36}
                    />
                }
                centerComponent={{
                    text: txtTitleDetail,
                    style: {
                        color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK,
                        marginTop: 10,
                        fontWeight: 'bold',
                        fontSize: 20
                    }
                }}
                backgroundColor={mode ? Color.colorApp.BLACK : Color.colorApp.WHITE}
            />
            {/* Body */}
            <ScrollView style={styles.body}>
                <InfoDetail productDetail={productDetail} />
            </ScrollView>
            <View style={[styles.footer, { backgroundColor: mode ? Color.colorApp.BLACK : Color.colorApp.WHITE }]}>
                <ButtonComponent
                    color={Color.bgColor.CHERRY}
                    style={styles.btnAddToCart}
                    title={t("products:btnAddToCart")}
                    titleStyle={styles.titleStyle}
                    onPress={() => { }}
                />
            </View>
        </View>
    )
}

export default DetailProduct

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
    },
    footer: {
        flex: 0.15,
        borderTopWidth: 0,
        shadowColor: Color.colorApp.DARKORANGE,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 10,
        paddingBottom: 10,
        paddingHorizontal: 10,
    },
    headerStyle: { borderBottomWidth: 0 },
    btnAddToCart: {
        marginTop: 15,
    },
    titleStyle: {
        color: Color.colorApp.WHITE,
        fontSize: 18,
        fontWeight: 'bold',
    },
})