// --
// OTOBO is a web-based ticketing system for service organisations.
// --
// Copyright (C) 2001-2020 OTRS AG, https://otrs.com/
// Copyright (C) 2019-2025 Rother OSS GmbH, https://otobo.io/
// --
// This program is free software: you can redistribute it and/or modify it under
// the terms of the GNU General Public License as published by the Free Software
// Foundation, either version 3 of the License, or (at your option) any later version.
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
// FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.
// --

"use strict";

var Core = Core || {};
Core.Agent = Core.Agent || {};

/**
 * @namespace Core.Agent.ArticlePin
 * @memberof Core.Agent
 * @author
 * @description
 *      
 */
Core.Agent.ArticlePin = (function (TargetNS) {

    /**
     * @function
     * @name Init
     * @return nothing
     *      
     */
    TargetNS.Init = function () {

        let $ArticleTable = $('#ArticleTable');

        // make pinned list items static and assign them to the first rows in the table (handled by jquery-tablesorter widget staticRow)
        let $PinnedArticleListItems = $('.PinnedArticle', $ArticleTable).closest('tr');
        $PinnedArticleListItems.each(function (index) {
            let $PinnedArticleListItem = $(this);
            $PinnedArticleListItem.addClass('static');
            $PinnedArticleListItem.attr('data-row-index', index);
        });
        

        let PinnedArticleIDs = $('.No input.ArticleID', $PinnedArticleListItems).map(function() {
            return $(this).val();
        }).get();

        // find containers of widgets of pinned articles by their article ID and add them to the start of the surrounding div
        let $ArticleWidgetsContainer = $('#ArticleItems');
        let $PinnedArticles = $('> div', $ArticleWidgetsContainer).filter(function() {
            let ArticleID = $('a:first-child', $(this)).attr('name').slice(7);
            return PinnedArticleIDs.includes(ArticleID);
        });

        $PinnedArticles.detach();
        $PinnedArticles.prependTo($ArticleWidgetsContainer);
        $PinnedArticles.addClass('Pinned');

        $('.Header h2', $PinnedArticles).each(function () {
            let $Pin = $.parseHTML('<p title="[% Translate("Pinned") | html %]"><i class="fa fa-thumb-tack"></i><em>[% Translate("Pinned") | html %]</em></p>');
            $(this).after($Pin);
        });

    };

    Core.Init.RegisterNamespace(TargetNS, 'APP_MODULE_EARLY');

    return TargetNS;

}(Core.Agent.ArticlePin || {}));
