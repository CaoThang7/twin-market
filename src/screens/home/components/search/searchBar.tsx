import React from 'react'
import { useTranslation } from "react-i18next"
import { StyleSheet, View } from 'react-native'
import TextInputComponent from '@components/text_input'

type searchBarItem = {
    search: string,
    onChangeSearch: Function
}

const SearchBar: React.FC<searchBarItem> = (props) => {
    const { t } = useTranslation()

    return (
        <View style={styles.container}>
            <TextInputComponent
                placeholder={t("search:placeholderSearchBar")}
                valueTextInput={props.search}
                onChangeText={props.onChangeSearch}
                keyboardType={'default'}
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    }
})